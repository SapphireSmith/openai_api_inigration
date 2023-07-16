import React, { useEffect, useState } from 'react';
import { Loader } from '../assets'
import { requestGPT } from '../helpers/helpers';

const Page = () => {

  const [command, setCommand] = useState('');
  const [formUpdate, setFormUpdate] = useState(false);
  const [input, setInput] = useState('');
  const [assistant, setAssistant] = useState({
    assistant: '',
    content: ''
  })
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCommand = () => {
      const data = localStorage.getItem('Instruction');
      if (data) {
        setCommand(data)
      } else {
        setCommand(`I will give you product details. With these details, You have to prepare a name, 1 paragraph discription and 4 key features only. 
        Discription limited under 350 characters. Should not include more than that. And please don't mention price in discription and key features.`)
      }
    }

    fetchCommand();
  }, [])


  const setInstruction = (e) => {
    e.preventDefault()
    const instruction = command;
    localStorage.setItem('Instruction', instruction);
    setFormUpdate(false);
  }

  const formatContent = (content) => {
    return new Promise((resolve) => {
      // Replace newline characters with <br> tags
      const formattedContent = content.replace(/\n/g, '<br>');
      resolve(formattedContent);
    });
  };

  const makeRequest = async () => {

    setLoading(true);
    const data = localStorage.getItem('Instruction');
    const newString = data + "\n \n" + input;
    const response = await requestGPT(newString);
    if (response.error) {
      setError(response.error)
    }
    setLoading(false);
    const formatted = await formatContent(response.content);
    setAssistant({ ...assistant, assistant: response.assistant, content: formatted })
  }





  return (
<div className='w-full h-auto'>
      <form className='w-full flex flex-col gap-4 justify-center items-center pt-20'
        onSubmit={setInstruction}
      >
        <div className='flex flex-col gap-4 px-8'>
          <label htmlFor="name">Command</label>
          <textarea type="text" disabled={formUpdate === false ? true : false}
            className='w-[500px] bg-gray-300 px-5 py-3 text-sm font-light text-black rounded-lg
             focus:outline-none hover:border-gray-500 border-2'
            value={command} onChange={(e) => { setCommand(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-4 px-8'>
          <label htmlFor="name">Input</label>
          <textarea type="text"
            className='w-[500px] bg-gray-300 px-5 py-3 text-sm font-light text-black rounded-lg
             focus:outline-none hover:border-gray-500 border-2'
            value={input} onChange={(e) => { setInput(e.target.value) }} />
        </div>

        {
          formUpdate ? <div className='btn flex'>
            <button type='submit' className='text-white px-4 bg-green-500 py-1 rounded-lg'>Update</button>
          </div> : ''
        }

      </form>

      {
        !formUpdate ? <div className='btn pt-4 flex justify-center items-center'>
          <button onClick={() => { setFormUpdate(true) }} className='text-white px-4 bg-blue-500 py-1 rounded-lg'>Change Instruction</button>
        </div> : ''
      }
      {
        !formUpdate ? <div className='btn pt-4 flex justify-center items-center'>
          <button onClick={makeRequest} className='text-white px-4 bg-red-500 py-1 rounded-lg'>Request</button>
        </div> : ''
      }


      <div className='output-display w-full flex justify-center items-center pt-28 pb-36'>
        <div className='bg-slate-400 rounded-lg w-[700px]  p-7 '>
          {
            loading ?

              <div className='flex justify-center items-center'>
                <img src={Loader} alt="loader" className='w-20 h-20 object-contain' />
              </div>
              : error ?
                <div className='flex justify-center items-center'>
                  <p className='font-bold'>
                    Well, that wasn't supposed to happen...
                    <br />
                    error:  {error}
                  </p>
                </div> :
                <>
                  <div>
                    <h4 className='font-semibold'>{assistant.assistant && assistant.assistant}</h4>
                    <br />
                  </div>
                  <p className='font-light' dangerouslySetInnerHTML={{ __html: assistant.content }}>

                  </p>
                </>
          }

        </div>
      </div>

    </div>
  )
}

export default Page