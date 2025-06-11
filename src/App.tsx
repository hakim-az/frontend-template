import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { motion } from 'motion/react'
import { ToastContainer, toast } from 'react-toastify'

export default function App() {
  const [counter, setCounter] = useState(0)
  const notify = () => toast('Wow so easy!')
  return (
    <motion.div className="flex min-h-svh flex-col items-center justify-center">
      <motion.div animate={{ rotate: 360 }}>
        <Button
          onClick={() => {
            setCounter(counter + 1)
            notify()
          }}>
          Click me : {counter}
        </Button>
      </motion.div>
      <ToastContainer />
    </motion.div>
  )
}
