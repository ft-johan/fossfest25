
import ScrollFloat from './ui/ScrollFloat';

export default function What() {
    

    return (
        <section className="w-full h-[50svh] flex flex-col items-center justify-center py-20 px-4">
            
             <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='bottom bottom+=20%'
  scrollEnd='bottom bottom-=100%'
  stagger={0.03}

>
what is Foss fest?
</ScrollFloat>
            <p className="max-w-xl text-center text-lg md:text-xl text-black mx-auto">
Whether you're a seasoned developer, a curious student, a UI/UX designer, or simply someone passionate about the power of open-source technology, FOSS Fest '25 is for you.

Come to learn, stay to build. Join us for two unforgettable days of community, code, and creation!            </p>
           
        </section>
    );
}

