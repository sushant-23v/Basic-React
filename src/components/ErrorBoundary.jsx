import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Application render error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl rounded-3xl border border-line bg-surface p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-warning">
            Error Boundary
          </p>
          <h1 className="mt-3 text-3xl font-bold text-text">
            A component failed while rendering.
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            This fallback protects the rest of the app and gives you one place
            to add logging or reporting later.
          </p>
          {this.state.error ? (
            <pre className="mt-6 overflow-x-auto rounded-2xl bg-surface-strong p-4 text-sm text-muted">
              {this.state.error.message}
            </pre>
          ) : null}
          <button
            type="button"
            onClick={this.handleReset}
            className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Reset boundary
          </button>
        </div>
      </div>
    );
  }
}
