import { InputItem, List, WingBlank } from 'antd-mobile';
import React from 'react';
import s from './Completed.module.less';

interface Props {}

const Completed: React.FC<Props> = () => {
    return (
        <WingBlank>
            <div className={s.ykt} />
            <List>
                <InputItem editable={false} value={"汤成倍健药业有限公司"}>
                    <b>商户名称</b>
                </InputItem>
                <InputItem editable={false} value={"465651632165465"}>
                    <b>商户号</b>
                </InputItem>
                <InputItem editable={false} value={"名称"}>
                    <b>企业名称</b>
                </InputItem>
            </List>
        </WingBlank>
    );
};

export default Completed;
