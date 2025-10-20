import { ArrowBigUp, ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className=" py-8 px-4 bg-card relative border-t border-border mt-10 pt-6 flex flex-wrap justify-center items-center ">
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Yarbework Mohammed All rights reserved.</p>
      <a href="#hero" className="ml-20 p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors">
        <ArrowUp size={20}/>
      </a>

    </footer>
  )
}

