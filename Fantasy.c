#include <stdio.h>
#include <string.h>

struct Player
{
    char name[50];
    char position[20];
    int passyrds, rushyrds, recyards, receptions, targets, td, attempts;
};

void swap(struct Player *a, struct Player *b) {
    struct Player temp = *a;
    *a = *b;
    *b = temp;
}

void sortPlayers(struct Player players[], int numPlayers, int sortStat) { // Bubble Sort Algorithm
    for (int i = 0; i < numPlayers - 1; i++) {
        for (int j = 0; j < numPlayers - i - 1; j++) {
            int stat1, stat2;
            switch (sortStat)

            {
                    case 1: // Passing Yards
                    stat1 = players[j].passyrds;
                    stat2 = players[j + 1].passyrds;
                    break;

                case 2: // Rushing Yards
                    stat1 = players[j].rushyrds;
                    stat2 = players[j + 1].rushyrds;
                    break;

                case 3: // Receiving Yards
                    stat1 = players[j].recyards;
                    stat2 = players[j + 1].recyards;
                    break;

                case 4: // Receptions
                    stat1 = players[j].receptions;
                    stat2 = players[j + 1].receptions;
                    break;

                case 5: // Targets
                    stat1 = players[j].targets;
                    stat2 = players[j + 1].targets;
                    break;

                case 6: // Touchdowns
                    stat1 = players[j].td;
                    stat2 = players[j + 1].td;
                    break;

                case 7: // Rushing Attempts
                    stat1 = players[j].attempts;
                    stat2 = players[j + 1].attempts;
                    break;
            }

            if (stat1 < stat2) {
                swap(&players[j], &players[j + 1]);
            }
        }
    }
}

int main()
{
    struct Player players[] =
    {
        {"Cooper Kupp", "WR", 0, 120, 90, 0, 0, 0, 0},
        {"Justin Jefferson", "WR", 2, 90, 106, 0, 0, 0, 0},
        {"Ja'Marr Chase", "WR", 0, 0, 87, 0, 0, 0, 0},
        {"Tyreek Hill", "WR", 0, 0, 100, 0, 0, 0, 0},
        {"Stefon Diggs", "WR", 0, 0, 89, 0, 0, 0, 0},
        {"Davante Adams", "WR", 0, 0, 89, 0, 0, 0, 0},
        {"AJ Brown", "WR", 0, 0, 88, 0, 0, 0, 0},
        {"Ceedee Lamb", "WR", 0, 0, 80, 0, 0, 0, 0},
        {"Jaylen Waddle", "WR", 0, 0, 80, 0, 0, 0, 0},
        {"Deandre Hopkins", "WR", 0, 0, 80, 0, 0, 0, 0},
        {"Travis Kelce", "TE", 0, 0, 79, 0, 0, 0, 0},
        {"Keenan Allen", "WR", 0, 0, 75, 0, 0, 0, 0},
        {"Amon-Ra St. Brown", "WR", 0, 0, 73, 0, 0, 0, 0},
        {"Devonta Smith", "WR", 0, 0, 70, 0, 0, 0, 0},
        {"Terry Mclaurin", "WR", 0, 0, 70, 0, 0, 0, 0},
        {"Chris Olave", "WR", 0, 0, 70, 0, 0, 0, 0},
        {"Mike Williams", "WR", 0, 0, 69, 0, 0, 0, 0},
        {"Amari Cooper", "WR", 0, 0, 68, 0, 0, 0, 0},
        {"Chris Godwin", "WR", 0, 0, 68, 0, 0, 0, 0},
        {"Christian Kirk", "WR", 0, 0, 65, 0, 0, 0, 0},
        {"Garret Wilson", "WR", 0, 0, 65, 0, 0, 0, 0},
        {"Jerry Jeudy", "WR", 0, 0, 65, 0, 0, 0, 0},
        {"DK Metcalf", "WR", 0, 0, 62, 0, 0, 0, 0},
        {"Tyler Lockett", "WR", 0, 0, 65, 0, 0, 0, 0},
        {"Tee Higgins", "WR", 0, 0, 64, 0, 0, 0, 0},

        // Add more players here
    };

    int numPlayers = sizeof(players) / sizeof(players[0]);

    int sortStat;

    printf("\nSelect a statistic for sorting:\n\n");
    printf("1: Avg Passing Yards per Game\n");
    printf("2: Avg Rushing Yards per Game\n");
    printf("3: Avg Receiving Yards per Game\n");
    printf("4: Avg Receptions per Game\n");
    printf("5: Avg Targets per Game\n");
    printf("6: Avg Touchdowns per Game\n");
    printf("7: Avg Rushing Attempts per Game\n");
    printf("\nEnter a number: ");

    scanf("%d", &sortStat);

    sortPlayers(players, numPlayers, sortStat);

    for (int i = 0; i < numPlayers; i++) {
        printf("\nPlayer: %s -> %s\n", players[i].name, players[i].position);

        switch (sortStat)
        {
            case 1: printf("Avg Passing Yards/G: %d\n", players[i].passyrds); break;
            case 2: printf("Avg Rushing Yards/G: %d\n", players[i].rushyrds); break;
            case 3: printf("Avg Receiving Yards/G: %d\n", players[i].recyards); break;
            case 4: printf("Avg Receptions/G: %d\n", players[i].receptions); break;
            case 5: printf("Avg Targets/G: %d\n", players[i].targets); break;
            case 6: printf("Avg Touchdowns/G: %d\n", players[i].td); break;
            case 7: printf("Avg Rushing Attempts/G: %d\n", players[i].attempts); break;

        }

        printf("\n");
    }

    return 0;
}
