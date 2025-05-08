interface NoticeProps {
  isOpen: boolean;
  setIsOpen: (i: boolean) => void;
  isEntryNotice?: boolean;
  content: string;
}

const Notice = (p: NoticeProps) => {
  return <div className={`${p.isOpen ? 'block' : 'hidden'}`}></div>;
};

export default Notice;
