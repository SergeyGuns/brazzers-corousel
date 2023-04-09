import run_1 from '../static/images/run/run-1.png'
import run_2 from '../static/images/run/run-2.png'
import run_3 from '../static/images/run/run-3.png'
import run_4 from '../static/images/run/run-4.png'
import run_5 from '../static/images/run/run-5.png'
import run_6 from '../static/images/run/run-6.png'
import run_7 from '../static/images/run/run-7.png'
import run_8 from '../static/images/run/run-8.png'
import { BrazzersCorousel } from './brazzers-corousel/BrazzersCorousel'

export default function Run () {
    return <BrazzersCorousel 
        autoloop={true} 
        framePerSecond={16}
        width={200} 
        height={200} 
        strokeColor={['red', 'green']} 
        imageUrls={[run_1, run_2, run_3, run_4, run_5, run_6, run_7, run_8]}
    />
}