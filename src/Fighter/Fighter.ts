export default interface Fighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: number,
  levelUp(): void,
  attack(enemy: Fighter): void,
  special?(enemy: Fighter): void,
  receiveDamage(attackPoints: number): number
}