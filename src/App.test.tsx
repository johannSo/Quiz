import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { questions } from './questions';

describe('Quiz App', () => {
  it('renders the first question correctly', () => {
    render(<App />);
    
    // Check if first question is displayed
    expect(screen.getByText(`Frage 1 von ${questions.length}`)).toBeInTheDocument();
    expect(screen.getByText(questions[0].question)).toBeInTheDocument();
    
    // Check if all options for first question are rendered
    questions[0].options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('handles answer selection correctly', () => {
    render(<App />);
    
    // Click on an answer
    const firstAnswer = screen.getByText(questions[0].options[0]);
    fireEvent.click(firstAnswer);
    
    // Check if answer is selected (has selected class)
    expect(firstAnswer).toHaveClass('selected');
    
    // Click again to deselect
    fireEvent.click(firstAnswer);
    expect(firstAnswer).not.toHaveClass('selected');
  });

  it('handles navigation buttons correctly', () => {
    render(<App />);
    
    // Check if "Zurück" button is disabled on first question
    const prevButton = screen.getByText('Zurück');
    expect(prevButton).toBeDisabled();
    
    // Check if "Nächste Frage" button is disabled when no answer is selected
    const nextButton = screen.getByText('Nächste Frage');
    expect(nextButton).toBeDisabled();
    
    // Select an answer and check if "Nächste Frage" button is enabled
    fireEvent.click(screen.getByText(questions[0].options[0]));
    expect(nextButton).not.toBeDisabled();
  });

  it('progresses through questions correctly', () => {
    render(<App />);
    
    // Answer first question
    fireEvent.click(screen.getByText(questions[0].options[0]));
    fireEvent.click(screen.getByText('Nächste Frage'));
    
    // Check if second question is displayed
    expect(screen.getByText(`Frage 2 von ${questions.length}`)).toBeInTheDocument();
    expect(screen.getByText(questions[1].question)).toBeInTheDocument();
  });

  it('shows final score correctly', () => {
    render(<App />);
    
    // Go through all questions
    questions.forEach((question, index) => {
      // Select the correct answers
      question.correctAnswers.forEach(answerIndex => {
        fireEvent.click(screen.getByText(new RegExp(question.options[answerIndex].trim())));
      });
      
      fireEvent.click(screen.getByText(
        index === questions.length - 1 ? 'Quiz beenden' : 'Nächste Frage'
      ));
    });
    
    // Check if score screen is shown
    expect(screen.getByText('Quiz beendet!')).toBeInTheDocument();
    expect(screen.getByText(`Du hast ${questions.length} von ${questions.length} Fragen richtig beantwortet!`)).toBeInTheDocument();
  });

  it('restarts quiz correctly', () => {
    render(<App />);
    
    // Complete the quiz
    questions.forEach((question, index) => {
      fireEvent.click(screen.getByText(question.options[0]));
      fireEvent.click(screen.getByText(
        index === questions.length - 1 ? 'Quiz beenden' : 'Nächste Frage'
      ));
    });
    
    // Click restart button
    fireEvent.click(screen.getByText('Quiz neu starten'));
    
    // Check if we're back at the first question
    expect(screen.getByText(`Frage 1 von ${questions.length}`)).toBeInTheDocument();
    expect(screen.getByText(questions[0].question)).toBeInTheDocument();
  });
}); 