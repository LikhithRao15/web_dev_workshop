import { describe, it, expect } from 'vitest';
import { tracks, starterCode, lessonContent } from '../src/data/tracks';
import { gameQuestions, challengeLevels, questionsByLevel } from '../src/data/quizQuestions';

describe('Curriculum & Quiz Data Integrity', () => {
  it('has four defined tracks with valid metadata', () => {
    expect(tracks).toHaveLength(4);
    tracks.forEach(track => {
      expect(track.id).toBeDefined();
      expect(track.title).toBeDefined();
      expect(track.lessons).toBeGreaterThan(0);
      expect(starterCode[track.id]).toBeDefined();
      expect(lessonContent[track.id]).toBeDefined();
      expect(lessonContent[track.id].steps.length).toBe(track.lessons);
    });
  });

  it('validates that every quiz question has valid options and an answer index within bounds', () => {
    expect(gameQuestions.length).toBeGreaterThanOrEqual(8);
    gameQuestions.forEach((q, _idx) => {
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThan(q.options.length);
      expect(q.why.length).toBeGreaterThan(5);
    });
  });

  it('verifies that each lesson step has complete rich metadata and starter code', () => {
    tracks.forEach(track => {
      const content = lessonContent[track.id];
      content.steps.forEach(step => {
        expect(step.title).toBeDefined();
        expect(step.description).toBeDefined();
        expect(step.code).toBeDefined();
        expect(step.tags).toBeInstanceOf(Array);
        expect(step.tags.length).toBeGreaterThan(0);
      });
    });
  });

  it('validates challenge levels from beginner to fully advanced', () => {
    expect(challengeLevels).toHaveLength(4);
    const expectedIds = ['beginner', 'intermediate', 'advanced', 'expert'];
    expect(challengeLevels.map(l => l.id)).toEqual(expectedIds);

    expectedIds.forEach(id => {
      const questions = questionsByLevel[id];
      expect(questions).toBeDefined();
      expect(questions.length).toBeGreaterThanOrEqual(5);
      questions.forEach(q => {
        expect(q.options.length).toBeGreaterThanOrEqual(2);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
        expect(q.why.length).toBeGreaterThan(5);
      });
    });
  });
});
