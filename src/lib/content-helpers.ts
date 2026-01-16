import { getCollection } from 'astro:content';

/**
 * Get all projects sorted by order
 */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Get all experience entries sorted by order
 */
export async function getExperience() {
  const experience = await getCollection('experience');
  return experience.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Get all achievements sorted by order
 */
export async function getAchievements() {
  const achievements = await getCollection('achievements');
  return achievements.sort((a, b) => a.data.order - b.data.order);
}
