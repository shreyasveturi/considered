import Link from 'next/link'

export default function Home(){
  return (
    <div className="max-w-3xl mx-auto py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="font-serif text-4xl mb-4">Before you buy, pause.</h1>
          <p className="text-muted mb-6">Track the purchases you almost made, and see how much closer they bring you to what you actually want.</p>
          <div className="flex gap-4">
            <Link href="/onboarding"><a className="px-5 py-3 bg-text text-white rounded-lg">Start your first pause</a></Link>
            <a href="#how" className="px-5 py-3 border border-border rounded-lg text-muted">See how it works</a>
          </div>
        </div>
        <div className="card p-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-muted">Considering</div>
            <div className="font-semibold text-lg">Alo leggings</div>
            <div className="text-muted text-sm">Goal: Weekend in Paris</div>
          </div>
          <div className="w-40 h-72 ml-4 flex-shrink-0">
            {/* Elegant mockup card as inline SVG to convey premium product */}
            <svg viewBox="0 0 200 360" className="w-full h-full rounded-lg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#FFFDF8" />
                  <stop offset="100%" stopColor="#F8F4EC" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="192" height="352" rx="18" fill="url(#g)" stroke="#E8DDCF" />
              <rect x="18" y="28" width="164" height="120" rx="8" fill="#fff" />
              <text x="26" y="60" fill="#2F2924" fontFamily="Playfair Display, serif" fontSize="14">Alo leggings</text>
              <text x="26" y="82" fill="#7A6F66" fontSize="12">£98</text>
              <rect x="18" y="160" width="164" height="28" rx="6" fill="#2F2924" />
              <text x="40" y="178" fill="#FFFDF8" fontSize="12">Add to avoided spend</text>
              <text x="26" y="210" fill="#7A6F66" fontSize="11">Skipping this would move you 16% closer.</text>
            </svg>
          </div>
        </div>
      </section>

      <section id="how" className="mt-12 max-w-2xl">
        <h3 className="font-serif text-2xl mb-4">How it works</h3>
        <ol className="list-decimal ml-5 text-muted">
          <li>Set a goal</li>
          <li>Pause before a purchase</li>
          <li>Track what you didn’t spend</li>
          <li>Watch your avoided spend become progress</li>
        </ol>

        <h3 className="font-serif text-2xl mt-8 mb-4">Designed for impulse moments</h3>
        <p className="text-muted">For purchases triggered by mood, boredom, stress, social media, convenience, or aspiration.</p>

        <h3 className="font-serif text-2xl mt-8 mb-4">Not a bank. Not a budget spreadsheet.</h3>
        <p className="text-muted">This app does not move money. It simply tracks avoided purchases as behavioural progress toward your goals.</p>

        <div className="mt-8">
          <Link href="/onboarding"><a className="px-5 py-3 bg-text text-white rounded-lg">Begin with one purchase you almost made</a></Link>
        </div>
      </section>
    </div>
  )
}
