import { StatusProps } from '../../lib/types';

const ErrorToast = ({ status }: { status: StatusProps }) => {
  return (
    <div className="h-8 flex items-center py-1 pr-2.5 pl-1 gap-3 bg-red-50 text-red-700 rounded-full">
      <span className="h-6 flex px-2 py-2.5 items-center bg-white rounded-[50px]">Error</span>
      {status.message}
    </div>
  );
};

export default ErrorToast;
