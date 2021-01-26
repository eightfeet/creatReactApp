import { InputItem, List, Toast, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';

interface Props {
    form: any;
}

const Licences: React.FC<Props> = ({ form }) => {
    const { getFieldProps, getFieldError } = form;
    return (
        <WingBlank>
            <div className="upload-title">
                <h3>这是标题</h3>
                <p>要求：清晰彩色，需年检章齐全，当年注册除外</p>
            </div>
            <form>
                <List>
                    <List.Item>upload</List.Item>
                    <InputItem
                        {...getFieldProps('fieldname', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input account',
                                },
                                {
                                    validator: (
                                        rule: any,
                                        value: any,
                                        callback: any
                                    ) => {
                                        console.log(rule);
                                        console.log(value);
                                        if (value.length < 10) {
                                            callback(new Error('请输入11位小数点'));
                                        }
                                    },
                                },
                            ],
                        })}
                        clear
                        error={!!getFieldError('fieldname')}
                        onErrorClick={() =>
                            Toast.info(getFieldError('fieldname').join('、'))
                        }
                        placeholder="请输入商户名称"
                        name="test"
                    >
                        <b>商户名称</b>
                    </InputItem>
                </List>
            </form>
        </WingBlank>
    );
};

export default createForm()(Licences);
