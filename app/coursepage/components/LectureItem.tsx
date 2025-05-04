interface LectureItemProps {
  title: string;
}

const LectureItem = ({ title }: LectureItemProps) => (
    <div className="flex items-center gap-2 py-1">
      <span className="text-blue-600">📄</span>
      <p className="text-sm hover:underline cursor-pointer">{title}</p>
    </div>
  );
  
  export default LectureItem;
  