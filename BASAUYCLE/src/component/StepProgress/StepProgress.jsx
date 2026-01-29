import { InfoCircleOutlined, ToolOutlined, CameraOutlined, DollarOutlined } from '@ant-design/icons';
import './StepProgress.css';

export default function StepProgress({ currentStep = 0 }) {
    const steps = [
        { title: 'Basic Info', icon: InfoCircleOutlined },
        { title: 'Technical Specs', icon: ToolOutlined },
        { title: 'Photos/Videos', icon: CameraOutlined },
        { title: 'Pricing', icon: DollarOutlined },
    ];

    return (
        <div className="step-progress-tabs">
            {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                    <div
                        key={index}
                        className={`step-tab ${isActive ? 'step-tab-active' : ''} ${isCompleted ? 'step-tab-completed' : ''}`}
                    >
                        <div className="step-tab-bar" />
                        <div className="step-tab-row">
                            <Icon className="step-tab-icon" />
                            <span className="step-tab-title">{step.title}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
