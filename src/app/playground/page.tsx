"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users, CornerDownLeft, Mic, Paperclip, Search, Clipboard, List, Users as Team, Activity, HelpCircle, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"

export function Playground() {
  const initialMessages = [
    {
      user: "USYD Student 1",
      avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
      description: "I am the student of USYD and majoring in Master of Computer Science.",
      content: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
      likes: 156,
      comments: 156,
      shares: 2
    },
    {
      user: "USYD Student 2",
      avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      description: "I am the student of USYD and majoring in Master of Computer Science.",
      content: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
      likes: 156,
      comments: 156,
      shares: 2
    },
    {
      user: "USYD Student 3",
      avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
      description: "I am the student of USYD and majoring in Master of Computer Science.",
      content: "The stars change, the mind remains the same.",
      likes: 156,
      comments: 156,
      shares: 2
    },
    {
      user: "USYD Student 4",
      avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
      description: "I am the student of USYD and majoring in Master of Computer Science.",
      content: "The stars change, the mind remains the same.",
      likes: 156,
      comments: 156,
      shares: 2
    }
  ];

  
  const [messages, setMessages] = useState(initialMessages);
  const [activeTextarea, setActiveTextarea] = useState<number | null>(null);
  const [commentText, setCommentText] = useState<string[]>(Array(initialMessages.length).fill(""));
  const { toast } = useToast();

  const incrementStat = (index: number, stat: keyof typeof initialMessages[0]) => {
    const newMessages = [...messages];
    if (stat === 'comments') {
      setActiveTextarea(activeTextarea === index ? null : index);
      setCommentText(Array(messages.length).fill(""));
    } else {
      newMessages[index][stat]++;
      setMessages(newMessages);
    }
  };
  const handleCommentChange = (text:any, index:any) => {
    const newCommentText = [...commentText];
    newCommentText[index] = text;
    setCommentText(newCommentText);
  };

  const postComment = (index:any) => {
    if (commentText[index].trim()) {
      toast({
        title: "You have successfully posted your comment:",
        description: `${commentText[index]}`,
      });

      const newMessages = [...messages];
      newMessages[index].comments++;
      setMessages(newMessages);

      setActiveTextarea(null);
      const newCommentText = [...commentText];
      newCommentText[index] = '';
      setCommentText(newCommentText);
    }
  };

  const handleClose = () => {
    setActiveTextarea(null);
    setCommentText(Array(initialMessages.length).fill(""));
  };

  const [activeTab, setActiveTab] = useState('account')

  return (
    <TooltipProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 overflow-y-scroll">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">ACME</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" alt="Jane Xi" />
              </Avatar>
              <div className="flex flex-col">
                <span className="font-semibold">Jane Xi</span>
                <span className="text-xs text-muted-foreground">Product Designer</span>
              </div>
            </div>
            <div className="px-4">
              <Input type="search" placeholder="Search..." className="w-full appearance-none bg-background shadow-none" />
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <Clipboard className="h-4 w-4" />
                  Projects
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <List className="h-4 w-4" />
                  Tasks
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <Team className="h-4 w-4" />
                  Team
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <Activity className="h-4 w-4" />
                  Tracker
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    New
                  </Badge>
                </Link>
                <div className="pt-2 border-t text-muted-foreground">
                  Organization
                </div>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <LineChart className="h-4 w-4" />
                  Analytics
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <Package className="h-4 w-4" />
                  Cap Table
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <ShoppingCart className="h-4 w-4" />
                  Perks
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    3
                  </Badge>
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <Package2 className="h-4 w-4" />
                  Expenses
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <Users className="h-4 w-4" />
                  Settings

                </Link>
                <div className="pt-2 border-t text-muted-foreground">

                </div>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <HelpCircle className="h-4 w-4" />
                  Help & Information
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <LogOut className="h-4 w-4" />
                  Log Out
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ">
              <div className="ml-0 flex items-center gap-4">
                <nav className="hidden gap-2 md:flex ">
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                    <span className="sr-only">Clip</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mic className="h-5 w-5" />
                    <span className="sr-only">Mic</span>
                  </Button>
                </nav>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </div>

              <div className="flex items-center ml-auto">
                <Tabs defaultValue="Creative" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="Creative">Creative</TabsTrigger>
                    <TabsTrigger value="Technical">Technical</TabsTrigger>
                    <TabsTrigger value="Precise">Precise</TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="flex-grow"></div>
              </div>

            </header>
            <main className="flex flex-1 flex-col p-2">
              <Toaster />
              <div className="relative flex h-full min-h-96 flex-col rounded-xl bg-muted/50 p-4 overflow-y-scroll">
                <div className="flex-1">
                  {messages.map((message, index) => (
                    <Card key={index} className="mb-4">
                      <CardHeader className="flex flex-col p-4" style={{ borderBottom: '1px solid #e8e8e8' }}>
                        <div className="flex items-center mb-2">
                          <Avatar style={{ marginRight: '10px' }}>
                            <AvatarImage src={message.avatarUrl} alt={message.user} />
                          </Avatar>
                          <div className="flex flex-col">
                            <Label style={{ fontWeight: 'bold', fontSize: '1rem' }}>{message.user}</Label>
                          </div>
                        </div>
                        <div className="flex flex-col" style={{ marginLeft: '50px' }}>
                          <Label style={{ fontSize: '0.9rem', color: 'gray' }}>{message.description}</Label>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-left" style={{ fontSize: '0.875rem', marginBottom: '10px' }}>{message.content}</div>
                        <div className="flex mt-2 justify-left text-sm text-gray-400 space-x-2">
                          <Button variant='link' onClick={() => incrementStat(index, 'likes')}>
                            {message.likes} Likes
                          </Button>
                          <Button variant='link' onClick={() => incrementStat(index, 'comments')}>
                            {message.comments} Comments
                          </Button>
                          <Button variant='link' onClick={() => incrementStat(index, 'shares')}>
                            {message.shares} Shares
                          </Button>
                        </div>
                        {activeTextarea === index && (
                          <div className="grid w-full gap-2 mt-2">
                            <Textarea value={commentText[index]} placeholder="Type your comment here." onChange={(e) => handleCommentChange(e.target.value, index)} />
                            <div className="flex justify-end space-x-2">
                              <Button onClick={handleClose} variant='secondary'>Close</Button>
                              <Button onClick={() => postComment(index)} variant='default' disabled={!commentText[index].trim()}>
                                Post Comment
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
                  <Label htmlFor="message" className="sr-only">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                  />
                  <div className="flex items-center p-3 pt-0">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Paperclip className="size-4" />
                          <span className="sr-only">Attach file</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">Attach File</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Mic className="size-4" />
                          <span className="sr-only">Use Microphone</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">Use Microphone</TooltipContent>
                    </Tooltip>
                    <Button type="submit" size="sm" className="ml-auto gap-1.5">
                      Send Message
                      <CornerDownLeft className="size-3.5" />
                    </Button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default Playground;