import fs from "fs";
import klaw from "klaw";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

const siteRoot = "https://www.evular.lt";

const getContent = directory => {
  const items = [];
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () =>
    new Promise(resolve => {
      // Check if posts directory exists //
      if (fs.existsSync(directory)) {
        klaw(directory)
          .on("data", item => {
            // Filter function to retrieve .md files //
            if (path.extname(item.path) === ".md") {
              // If markdown file, read contents //
              const data = fs.readFileSync(item.path, "utf8");
              // Convert to frontmatter object and markdown content //
              const dataObj = matter(data);
              // Create slug for URL //
              dataObj.data.slug = dataObj.data.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
              dataObj.content = marked(dataObj.content);
              // Remove unused key //
              delete dataObj.orig;
              // Push object into items array //
              items.push(dataObj);
            }
          })
          .on("error", e => {
            console.log(e);
          })
          .on("end", () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //
            resolve(items);
          });
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items);
      }
    });
  return getFiles();
};

export default {
  getSiteData: async () => ({
    title: "Evular"
  }),
  getRoutes: async () => {
    const posts = await getContent("data/posts");
    return [
      {
        path: "/",
        component: "src/pages/Home.jsx",
        getData: () => ({
          posts
        })
      },
      {
        path: "/blogas/",
        component: "src/pages/Blog.jsx",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/${post.data.slug}`,
          component: "src/pages/Post.jsx",
          getData: () => ({
            post,
            posts
          })
        }))
      },
      {
        path: "404",
        component: "src/pages/NotFound.jsx"
      },
      {
        path: "/success/",
        component: "src/pages/Success.jsx"
      }
    ];
  },
  siteRoot
};
