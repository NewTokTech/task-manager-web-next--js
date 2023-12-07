
"use client"
import React, { useState } from 'react';
import { createUserApi } from '../../../axios/auth/auth';
import User from './interface';
import valitaion from './utils';
import { useRouter } from 'next/navigation'

const Form: React.FC = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>()
    const [confirmPassword, setConfirmPassword] = useState('')
    const [formData, setFormData] = useState<User>({
        fullName: '',
        email: '',
        address: '',
        phone: undefined,
        accountNumber: undefined,
        IFC: undefined,
        Branch: '',
        password: '',
        role: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({ ...prevData, [name]: value }));

    };

    const handleClick = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const valitaionResult = valitaion(formData, confirmPassword)
        console.log(valitaionResult);
        if (valitaionResult === "success") {
            try {
                const res = await createUserApi(formData)
                if (res === 200) {
                    router.push('/')
                } else {
                    setError(res)
                }
            } catch (error) {
                setError('error')
            }
        } else {
            setError(valitaionResult)
        }
    }

    return (
        <>
            <div className='flex justify-center items-center mx-6 py-5 '>
                <form className="w-full max-w-lg bg-slate-100 p-10 " >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                FullName
                            </label>
                            <input
                                type="text"
                                id="grid-first-name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder="Name"
                            />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                E Mail
                            </label>
                            <input
                                type="email"

                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                id="grid-first-name"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Address
                            </label>
                            <input
                                type="text"

                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Address"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Account Number
                            </label>
                            <input
                                type="number"
                                id="grid-first-name"
                                name="accountNumber"
                                value={formData.accountNumber}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder="Account Number"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                IFC Code
                            </label>
                            <input
                                type="number"

                                name="IFC"
                                value={formData.IFC}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="IFC Code"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Branch
                            </label>
                            <input
                                type="text"
                                id="grid-first-name"
                                name="Branch"
                                value={formData.Branch}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder="Branch"
                            />
                        </div>
                        <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                            <label htmlFor="grid-state" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Role
                            </label>
                            <div className="relative">
                                <select
                                    id="grid-state"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                >
                                    <option value="TeamMember">Team Member</option>
                                    <option value="TeamHead">Team Head</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="grid-password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="grid-password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="************"
                            />

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="grid-password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="grid-password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                }}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="************"
                            />
                        </div>
                    </div>


                    {error ?
                        (<div className="bg-red-100 border border-red-400 my-6 text-red-700 px-4 py-3 rounded relative" role="alert">

                            <span className="block sm:inline">{error}</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" >
                                <svg onClick={() => {
                                    setError(null)
                                }} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <title>Close</title>
                                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                </svg>
                            </span>
                        </div>) : null
                    }

                    <div className='flex justify-center items-center'>
                        <input
                            onClick={handleClick}
                            type="submit"
                            value='Submit'
                            className='py-2.5 px-16 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
