
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import './index.scss';

class RedirectHelpdeskPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div>
        RedirectHelpdeskPage
      </div>
    );
  }
}


export default withRouter(RedirectHelpdeskPage);