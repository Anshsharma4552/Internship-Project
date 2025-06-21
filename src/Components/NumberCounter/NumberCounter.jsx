import React from 'react';
import CountUp from 'react-countup';
function NumberCounter() {
  return (
    <div className='bg-blue-600 text-white py-12'>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp start={0} end={75000} duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>
                </p>
                <p>Happy Learners</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                    end={45}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true} 
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Trainers</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                    end={160}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Corporate Trainings</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                    end={17}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Years of Experience</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                    end={45}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Locations</p>
            </div>
        </div>
    </div>
  )
}

export default NumberCounter