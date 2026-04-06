interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export default function TeamCard({ name, title, bio, initials }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">{initials}</span>
        </div>
        <div>
          <h3 className="text-slate-900 font-bold text-base">{name}</h3>
          <p className="text-amber-600 text-sm font-medium">{title}</p>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}
