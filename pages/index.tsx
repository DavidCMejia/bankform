import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { FaRegBuilding } from 'react-icons/fa';
import {AiOutlineNumber,AiOutlineCreditCard} from 'react-icons/ai';
import{HiOutlineMail} from 'react-icons/hi';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    
});
const formOptions = { resolver: yupResolver(validationSchema) };

// get functions to build form with useForm() hook
const { register, handleSubmit, reset, formState } = useForm(formOptions);
const { errors } = formState;

function onSubmit(data: any) {
    // display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    return false;
}

return (
<>
  <br /><br />
  <div className='main'>
    <div className='wrap'>
      <div className="input_text mt-8 relative">
        <label className="htmlForm-label"><FaRegBuilding/> Seleccione la institución Bancaria</label>
        <br /><br />
        <input name="formselector" className="radioinput"value="1" type="radio"  />Banamex
        <input name="formselector" className="radioinput" value="2" type="radio" />Otro Banco
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br/>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label"><AiOutlineNumber/>Numero de cuenta</label>
          <br/>
          <input type="text" className="htmlForm-control" id="exampleInputPassword1" placeholder="000000000000000000"/>
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label"><AiOutlineCreditCard/>Numero de tarjeta</label>
          <br/>
          <input type="text" className="htmlForm-control" id="exampleInputPassword1" placeholder="0000 0000 0000 0000" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label"><HiOutlineMail/>Email address</label>
          <br/>
          {/* <input  {...register('email')} type="text" className={`form-control ${errors.password ? 'is-invalid' : ''}`}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jhon@email.com" /> */}
          <input type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="mb-3">
  <input type="file" className="custom-file-input" id="customFile"/>
  <label className="custom-file-label" htmlFor="customFile">Adjunte certificacion bancaria</label>
</div>
        <button type="submit" className="btn btn-primary"><BsFillArrowRightCircleFill size={30}/></button>
      </form>
    </div>
  </div>

</>
)
}

export default Home