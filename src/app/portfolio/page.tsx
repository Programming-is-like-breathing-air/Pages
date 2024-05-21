import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarImage } from '@/components/ui/avatar'


const portfolio = () => {
  return (
    <div className="container flex flex-col items-center border border-gray-300 p-4 rounded-lg" >
    
      <div className="flex items-center justify-between w-full border-b border-gray-300 pb-2 mb-4">
        <Label className="text-3xl font-bold tracking-tight">Yuqing Wu</Label>
        <div className="flex space-x-4 ml-auto">
          <Button variant="link" className="text-black">About Us</Button>
          <Button variant="link" className="text-black">Experience</Button>
          <Button variant="link" className="text-black">Project</Button>
          <Button variant="link" className="text-black">Contact</Button>
        </div>
      </div >
      <div className="mt-4" style={{ marginTop: '20px' }}>
        <Avatar style={{marginRight: '10px', width: '300px', height: '300px' }}>
          <AvatarImage src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        </Avatar>
      </div>
    </div>

  )
}

export default portfolio