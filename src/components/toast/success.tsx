import { StatusProps } from '@/lib/types';

const SuccessToast = ({ status }: { status: StatusProps }) => {
  return (
    <div className="h-8 flex items-center m-1 md:m-0 py-6 lg:py-1 pr-2.5 pl-1 gap-3 bg-green-50 text-green-700 rounded-full">
      <span className="h-6 flex px-2 py-2.5 items-center bg-white rounded-[50px]">
        Success
      </span>
      {status.message}
    </div>
  );
};

export default SuccessToast;
