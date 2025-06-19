import React from 'react';
import CountUp from 'react-countup';
function NumberCounter() {
  return (
    <div className='bg-blue-600 text-white py-12'>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp start={0} end={898} duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>
                </p>
                <p>Expert tutors</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                    end={15000}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true} 
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Hours Content</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                    end={30}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Courses</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                    end={10000}
                    separator=','
                    suffix='+'
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p>Learnes</p>
            </div>
        </div>
    </div>
  )
}

export default NumberCounter