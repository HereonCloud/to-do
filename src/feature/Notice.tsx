interface NoticeProps {
  isOpen: boolean;
  setIsOpen: (i: boolean) => void;
  isEntryNotice?: boolean;
  content: string;
}

const Notice = (p: NoticeProps) => {
  return <div className=''></div>;
};

export default Notice;
