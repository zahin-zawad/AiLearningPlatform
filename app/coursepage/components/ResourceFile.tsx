interface ResourceFileProps {
  title: string;
}

const ResourceFile = ({ title }: ResourceFileProps) => (
    <div className="flex items-center gap-2 text-sm py-1">
      <span className="text-pink-600">📎</span>
      <p className="hover:underline cursor-pointer">{title}</p>
    </div>
  );
  
  export default ResourceFile;
  