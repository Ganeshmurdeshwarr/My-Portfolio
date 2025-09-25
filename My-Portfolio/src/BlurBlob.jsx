import React from 'react'
import PropType from 'prop-types' 

const BlurBlob = ({position , size}) => {

    const {top, left}= position;
    const {width, height}= size;
  return (
    <div className='absolute'
    style={{
        top:top,
        left:left,
        width:width,
        height:height,
        transform:"translate(-50%, -50%)",
    }}>
        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animation-blob'>

        </div>
    </div>
  )
}
  BlurBlob.PropType={
    position: PropType.shape({
        top: PropType.string,
        left: PropType.string,
    }),

    size: PropType.shape({
        width: PropType.string,
        height: PropType.string,
    })
  }


export default BlurBlob