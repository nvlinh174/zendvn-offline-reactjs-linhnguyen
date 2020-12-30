// import { useState } from 'react'
import Input from './common/Input';
import Button from './common/Button';

export default function DemoComponent() {
    // const [password, setPassword] = useState('');

    // let icon = (
    //     <svg
    //         stroke='currentColor'
    //         fill='currentColor'
    //         stroke-width='0'
    //         viewBox='0 0 512 512'
    //         height='1em'
    //         width='1em'
    //         xmlns='http://www.w3.org/2000/svg'
    //         style='flex-shrink: 0;'
    //     >
    //         <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
    //     </svg>
    // );

    let icon = <i className='fas fa-user'></i>;

    return (
        <div className='tcl-container'>
            <div className='tcl-row'>
                <div className='tcl-col-4'>
                    {/* <input type="text" value="hello" /> */}
                    <Input />
                    <hr></hr>
                    <Input labelText='Email' placeholder='Nhap Email ...' />
                    <hr></hr>
                    <Input labelText='Email' />
                    <hr></hr>
                    <Input
                        errorText='Email khong hop le'
                        labelText='Email'
                        placeholder='Nhap Email ...'
                    />
                    <Input isShowErrorText labelText='Email' placeholder='Nhap Email ...' />
                    <Input
                        isShowErrorText
                        errorText='Email khong hop le'
                        labelText='Email'
                        placeholder='Nhap Email ...'
                    />
                    <hr></hr>
                    <Input
                        labelText='Password'
                        type='password'
                        placeholder='Nhap Password ...'
                        // value="test"
                        // value={password}
                        value='hello'
                        // onChange={(evt) => {
                        //   console.log('onChange Ben Ngoài', evt.target.value);
                        // }}
                    />
                </div>
                <div className='tcl-col'>
                    <Button text='button-default' />
                    <Button classes='btn-primary' text='button-primary' />
                    <Button classes='btn-category' text='button-category' />
                    <Button text='button-default-big' isBigSize />
                    <Button classes='btn-primary' text='button-primary-big' isBigSize />
                    <Button classes='btn-category' text='button-category-big' isBigSize />
                    <Button classes='btn-primary' text='button-primary' icon={icon} />

                    <Button type='link' text='link-default' />
                    <Button type='link' text='link-default' link='https://zendvn.com/' />
                </div>
            </div>
        </div>
    );
}
