type ToDoListT = {
  toDo: string;
  status: STATUS;
};

enum STATUS {
  PENDING = 'Not yet started',
  ONGOING = 'Working on it',
  STUCK = 'Stuck',
  DONE = 'Done',
}

enum LEVEL_STATS {
  STRENGTH = 'Strength',
  DEXTERITY = 'Dexterity',
  CONSTITUTION = 'Constitution',
  INTELLIGENCE = 'Intelligence',
  CHARISMA = 'Charisma',
  WISDOM = 'Wisdom',
}

export { STATUS, LEVEL_STATS };
export type { ToDoListT };
