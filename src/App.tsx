import React from 'react';
import 'antd-mobile/dist/antd-mobile.less';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import Home from './router/home';
import UploadInfor from './router/upload';
import Information from './router/information';
import Licences from './router/licences';
import IDCard from './router/idcard';
import Prom from './router/promise';
import BusinessInfo from './router/BusinessInfo';
import BankCard from './router/bankcard';
import Manager from './router/manager';
import Other from './router/other';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/information">
                        <Information />
                    </Route>
                    <Route exact path="/upload">
                        <UploadInfor />
                    </Route>
                    <Route exact path="/upload/licences">
                        {/* 营业执照 */}
                        <Licences />
                    </Route>
                    <Route exact path="/upload/idcard">
                        {/* 法人身份证 */}
                        <IDCard />
                    </Route>
                    <Route exact path="/upload/promise">
                        {/* 经营许可证 */}
                        <Prom />
                    </Route>
                    <Route exact path="/upload/businessinfo">
                        {/* 经营材料 */}
                        <BusinessInfo />
                    </Route>
                    <Route exact path="/upload/bankcard">
                        {/* 结算银行卡 */}
                        <BankCard />
                    </Route>
                    <Route exact path="/upload/manager">
                        {/* 超级管理员 */}
                        <Manager />
                    </Route>
                    <Route exact path="/upload/other">
                        {/* 选填信息 */}
                        <Other />
                    </Route>
                    <Route path="*">
                        <Information />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
