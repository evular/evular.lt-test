import React, { Component } from "react";
import { RouteData } from "react-static";
import { Helmet } from "react-helmet";
import Card from "../containers/Card";

function strings_to_object(array) {
  // Initialize new empty array
  var objects = [];

  // Loop through the array
  for (var i = 0; i < array.length; i++) {
    // Create the object in the format you want
    var obj = { value: array[i] };

    // Add it to the array
    objects.push(obj);
  }

  // Return the new array
  return objects;
}

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: strings_to_object(
        this.props.posts
          .map(item => item.data.tag)
          .filter((value, index, self) => self.indexOf(value) === index)
      )
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  componentWillMount() {
    this.setState({ value: "all" });
  }

  render() {
    const { options, value } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>Evular | Blogas</title>
          <meta
            name="Description"
            content="Kiekvieną dieną informacinių technologijų pasaulyje atsiranda kažkas naujo. Mes
        norime suteikti Jums svarbiausias naujienas, patarimus ir įžvalgas, kad į rytojų
        žengtume kartu."
          />
          <meta property="og:url" content="https://www.evular.lt/blogas" />
          <meta property="og:title" content="Evular | Blogas" />
          <meta
            property="og:image"
            content="https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <meta
            property="og:description"
            content="Kiekvieną dieną informacinių technologijų pasaulyje atsiranda kažkas naujo. Mes
            norime suteikti Jums svarbiausias naujienas, patarimus ir įžvalgas, kad į rytojų
            žengtume kartu."
          />
        </Helmet>
        <section className="bg-white text-dark pt-5 pb-5">
          <div className="container">
            <div className="row gutter-5 align-items-end">
              <div className="col-lg-8 col-12">
                <span className="eyebrow mb-1 text-primary">Blogas</span>
                <h2 className="text">Puikus laikas sužinoti kažką naujo.</h2>
                <p className="">
                  Kiekvieną dieną informacinių technologijų pasaulyje atsiranda
                  kažkas naujo. Mes norime suteikti Jums svarbiausias naujienas,
                  patarimus ir įžvalgas, kad į rytojų žengtume kartu.
                </p>
              </div>
              <div className="col-lg-4 col-12">
                <div className="form-group mb-0">
                  <label>Pasirinkite kategoriją</label>
                  <select
                    onChange={this.handleChange}
                    defaultValue="all"
                    className="custom-select"
                  >
                    <option value="all" key="Visi įrašai">
                      Visi įrašai
                    </option>
                    {options.map(item => (
                      <option key={item.value} value={item.value}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white pt-0 pb-5" style={{ minHeight: "50vh" }}>
          <div className="container">
            <ul className={"row gutter-5"} style={{ flexDirection: "row" }}>
              {this.props.posts
                .filter(post => {
                  if (value === "all") {
                    return post.data.tag;
                  } else if (post.data.tag === value) {
                    return value;
                  }
                })
                .reverse()
                .map(post => (
                  <Card
                    title={post.data.title}
                    description={post.data.description}
                    link={`/blogas/${post.data.slug}`}
                    tag={post.data.tag}
                    thumbnail={post.data.thumbnail}
                    key={`/blogas/${post.data.title}`}
                    date={post.data.date}
                  />
                ))}
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default () => (
  <RouteData>{({ posts }) => <Blog posts={posts} />}</RouteData>
);
