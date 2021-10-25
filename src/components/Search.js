import React, { Component } from 'react';

class Search extends Component {
    render() {
      return (
        <article>
          <div class="col-lg-12 mb-4">
            <form
              class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 w-50 navbar-search">
              <div class="input-group">
                <input type="text" class="form-control bg-light border-primary small"
                  placeholder="Search by Address/ Txn Hash / Block / Token..." aria-label="Search"
                  aria-describedby="basic-addon2"></input>
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">
                  </button>
                </div>
              </div>
            </form>
          </div>
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                  );
                }.bind(this)}
              >
              </form>
          </article>
      );
    }
  }
  export default Search;