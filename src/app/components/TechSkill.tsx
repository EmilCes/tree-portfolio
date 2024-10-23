
const TechSkill = ({skillName, color}: TechSkillProps) => {
  
  return (
    <div className="p-1 pl-2 pr-2 bg-opacity-75 rounded-xl" style={{ backgroundColor: color }}>
      <p className="text-sm text-white whitespace-nowrap">
        {skillName}
      </p>
    </div>
  )
}

export default TechSkill;

interface TechSkillProps {
  skillName: string;
  color: string;
}
