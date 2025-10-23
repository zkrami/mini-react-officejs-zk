import React from 'react';
import { routerRedux, Switch, Route } from 'dva/router';
import { AwaitPromiseThenRender } from './components/AwaitPromiseThenRender';
import RedirectHelpdeskPage from './components/RedirectHelpdeskPage';
import { DataGeneration } from './components/tasks/DataGeneration';

const { ConnectedRouter } = routerRedux;
function RouterConfig({ history }: any) {
  //@ts-ignore
  return (
    <AwaitPromiseThenRender
      //@ts-ignore
      promise={Office.onReady(() => {console.log("Office.onReady in AwaitPromiseThenRender")})}
    >
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/redirect-helpdesk">
            <RedirectHelpdeskPage />
          </Route>
          <Route exact path="/">
            <div style={{ textAlign: "center" }}>
              <big>
                <br/>
                <br/>
                Welcome on board!
                <br/>
                <br/>
                Click on the buttons in the ribbon to run!
              </big>
            </div>
          </Route>
          <Route exact path="/data-generation">
            <DataGeneration />
          </Route>
        </Switch>
      </ConnectedRouter>
    </AwaitPromiseThenRender>
  );
}

export default RouterConfig;