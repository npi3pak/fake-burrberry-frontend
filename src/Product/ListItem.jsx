import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div>
        <div className="product-list-item product-list-item-hidden">
          <h2 className="product-list-item-title">
            {this.props.title}
          </h2>
        </div>
        {this.props.active
          ? <div className="product-list-item-content">
              <span dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </div>
          : null}
      </div>
    );
  }
}

export default ListItem;
