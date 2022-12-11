import { Table } from '@mantine/core'

const exampleRows = [
    { title: 'Mod 1', description: 'A mod', difficulty: "Expert", rating: 3.9 },
    { title: 'Mod 2', description: 'A worse mod', difficulty: "Advanced", rating: 3.2 },
    { title: 'Mod 3', description: 'A better mod', difficulty: "Beginner", rating: 4.8 },
  ]

export function ModsList() {
    const rows = exampleRows.map((element) => (
        <tr key={element.rating}>
          <td>{element.title}</td>
          <td>{element.description}</td>
          <td>{element.difficulty}</td>
          <td>{element.rating}</td>
        </tr>
      ));

    return (
        <Table highlightOnHover>
            <thead>
              <tr>
                <th>Mod Name</th>
                <th>Description</th>
                <th>Difficulty</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
    )
}
  