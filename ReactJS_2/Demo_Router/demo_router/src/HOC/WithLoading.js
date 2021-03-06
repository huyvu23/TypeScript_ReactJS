import React, { Component } from "react";
// WrapperComponent : là tham số chuyền vào có thể chuyền các component vào
function WithLoading(WrapperComponent) {
  // kHAI BÁO RA CLASS
  class HOC extends Component {
    render() {
      if (this.props.isLoading) {
        return (
          <div>
            <p>Loading...</p>
          </div>
        );
      } else {
        // ...this.props là : truyền theo tất cả các props của WrapperComponent xuống tầng bên dưới
        return <WrapperComponent {...this.props} />;
      }
    }
  }
  //
  return HOC;
}
export default WithLoading;
