import React from 'react'
import {useForm} from "react-hook-form"
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {authUser} from '../../redux/reducers/auth';
import axios from "../../utils/axios";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        mode: "onBlur"
    });


    const submitForm = (data) => {
        axios.post('/login', data)
            .then(res =>
            {
                dispatch(authUser(res.data));
                navigate('/');
                console.log(data)
            })
            .catch((err) =>  console.log(err));
    };

    return (
        <div className='login'>

            <h2 className="login__title">
                Log in
            </h2>
            <form className='login__form' onSubmit={handleSubmit(submitForm)}>
                <label className="login__label">
                    <h3 className="login__label-title">Email:</h3>
                    <input
                        placeholder='Email:'
                        type="email"
                        className="login__form-input"
                        {...register('email')}
                    />
                </label>

                <label className="login__label">
                    <h3 className="login__label-title">Password:</h3>
                    <input
                        placeholder='Password:'
                        type="password"
                        className="login__form-input"
                        {...register('password')}
                    />
                </label>

                <button className="login__form-btn">Log in</button>
            </form>
        </div>

    );
};

export default Login;