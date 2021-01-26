import React from 'react';
import { CheckOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { List, WhiteSpace, NoticeBar } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import s from './InforList.module.less';

const Item = List.Item;
const Brief = Item.Brief;


export default function ExampleIndex() {
    const history = useHistory();
    return (
        <>
            <NoticeBar
                className={s.notice}
                marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}
            >
                申请被驳回:
                原因填写的身份信息与银行卡身份证号不匹配，请修改后再申请！
            </NoticeBar>
            <div className={s.require}>必填信息</div>
            <List className={s.lisewrap}>
                <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={() => history.push('/upload/licences')}
                    extra={
                        <>
                            <CheckOutlined /> 已完成
                        </>
                    }
                    className={s.complete}
                >
                    营业执照
                </Item>
            </List>
            <WhiteSpace />
            <List className={s.lisewrap}>
                <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={() => history.push('/upload/idcard')}
                    className={s.failure}
                    extra={
                        <>
                            <ExclamationCircleFilled /> 未通过
                        </>
                    }
                >
                    法人身份证
                </Item>
            </List>
            <WhiteSpace />
            <List className={s.lisewrap}>
                <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={() => history.push('/upload/promise')}
                    className={s.failure}
                    extra={'未完成'}
                >
                    经营许可证
                </Item>
            </List>
            <WhiteSpace />
            <List className={s.lisewrap}>
                <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={() => history.push('/upload/bankcard')}
                    className={s.failure}
                    extra={'未完成'}
                >
                    结算银行卡
                </Item>
            </List>
            <WhiteSpace />
            <List className={s.lisewrap}>
                <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={() => history.push('/upload/manager')}
                    className={s.failure}
                    extra={'未完成'}
                >
                    超级管理员
                </Item>
            </List>
            <div className={s.requiregray}>选填信息</div>
            <List className={s.lisewrap}>
                <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={() => history.push('/upload/other')}
                >
                    营业执照
                    <Brief>
                        根据实际审核情况，额外要求商家提供
                        <br />
                        指定的补充资料
                    </Brief>
                </Item>
            </List>
            <WhiteSpace />
            <WhiteSpace />
        </>
    );
}
