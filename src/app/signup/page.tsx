import SignupForm from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem-5rem)] py-12"> {/* Adjust min-h based on navbar/footer height */}
      <SignupForm />
    </div>
  );
}
