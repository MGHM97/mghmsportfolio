'use client'

import CountUp from 'react-countup'

const stats = [
  { num: 3, text: 'Years of experience' },
  { num: 8, text: 'Technologies mastered' },
  { num: 1000, text: '+ Commits' },
]

const Stats = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto w-full">
        <div className="flex flex-wrap justify-between w-full mx-auto">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-center"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
