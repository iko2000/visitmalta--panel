import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  
  return (
    <div className="flex-1 w-full h-screen flex flex-col md:flex-row min-h-screen">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/api/placeholder/1000/1500"
          alt="Malta coastal view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Malta</h1>
            <p className="text-xl text-white max-w-md">
              Sign in to plan your perfect Mediterranean getaway
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-md w-full">
    
          <form className="flex flex-col gap-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input 
                name="email" 
                placeholder="you@example.com" 
                required 
                className="h-12 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
               
              </div>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                required
                className="h-12 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <SubmitButton 
              pendingText="Signing In..." 
              formAction={signInAction}
              className="h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 font-medium mt-2"
            >
              Sign in
            </SubmitButton>

            <FormMessage message={searchParams} />

          </form>
        </div>
      </div>
    </div>
  );
}