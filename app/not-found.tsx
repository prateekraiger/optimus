import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-12 relative">
          <h1 className="text-[12rem] font-display leading-[1] opacity-5 select-none pointer-events-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-px w-24 bg-foreground/20" />
          </div>
        </div>
        
        <h2 className="text-3xl font-display mb-4 tracking-tight">Endpoint Not Found</h2>
        <p className="text-muted-foreground mb-12 text-sm font-mono uppercase tracking-widest">
          The requested coordinate does not exist on our edge network.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button className="rounded-full px-12 h-14 bg-foreground hover:bg-foreground/90 text-background">
              Return to Base
            </Button>
          </Link>
          <Link href="/#developers">
            <Button variant="outline" className="rounded-full px-12 h-14 border-foreground/10 hover:bg-foreground/5">
              Contact Support
            </Button>
          </Link>
        </div>
        
        <div className="mt-24 pt-8 border-t border-foreground/5 text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
          Optimus Infrastructure Protocol v1.0.4
        </div>
      </div>
    </div>
  )
}
