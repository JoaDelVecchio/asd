const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50">
      <div className="bg-red-100 text-red-800 p-6 rounded-lg shadow">
        <strong>Error:</strong> {message}
      </div>
    </div>
  );
};

export default ErrorMessage;
