import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { motion } from 'motion/react'

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <motion.div className="flex min-h-svh flex-col items-center justify-center">
      <motion.div animate={{ rotate: 360 }}>
        <Button onClick={() => setCounter(counter + 1)}>
          Click me : {counter}
        </Button>
      </motion.div>
    </motion.div>
  )
}
