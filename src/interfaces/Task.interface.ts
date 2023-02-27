import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
interface Task {
  deadline?: FirebaseFirestoreTypes.Timestamp | Date;
  id?: string;
  name?: string;
  priority?: number;
  userId?: string;
  completed?: boolean;
}

export default Task;
