import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress className="animate-spin text-4xl" />
    </div>
  );
};

export default Loading;
