"use client"

import { useFormStatus } from 'react-dom';

const RegisterBtn = () => {

    const { pending } = useFormStatus();
    const loading = <button className="flex items-center justify-center gap-2 bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">
        <p className="text-center">Submitting...</p>
        <span className="flex justify-center items-center">
            <span className="loader ease-linear rounded-full border-4 border-t-4 border-gray-400 h-6 w-6"></span>
        </span>
    </button>


    return (
        <>
            <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">{pending ? loading : "Create Account"}</button >
        </>
    );
};

export default RegisterBtn;