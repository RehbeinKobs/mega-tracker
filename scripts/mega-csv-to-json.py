import csv
import json

with open("data/sorteios.csv") as file:
    data = list(csv.reader(file))

contests = []

def sim_to_bool(sim):
    if sim == "Sim":
        return True
    return False

def reais_to_float(reais):
    return float(reais[2:].replace('.', '').replace(',', '.'))

for raw_contest in data[1:]:
    contest = {}
    contest["concurso"] = raw_contest[0]
    contest["data"] = raw_contest[1]
    contest["numeros"] = [int(num) for num in raw_contest[2: 8]]
    contest["ganhadores"] = {
        "faixa1": int(raw_contest[8]),
        "faixa2": int(raw_contest[9]),
        "faixa3": int(raw_contest[10])
    }
    contest["cidade"] = raw_contest[14]
    contest["valores"] = {
        "rateio": {
            "faixa1": reais_to_float(raw_contest[11]),
            "faixa2": reais_to_float(raw_contest[12]),
            "faixa3": reais_to_float(raw_contest[13])
        },
        "acumulado": reais_to_float(raw_contest[15]),
        "arrecadado": reais_to_float(raw_contest[17])
    }
    contest["acumulado"] = sim_to_bool(raw_contest[18])
    contest["especial"] = sim_to_bool(raw_contest[19])
    contest["observacao"] = raw_contest[20]
    contests.append(contest)


with open("data/sorteios.json", "w") as file:
    json.dump(contests, file)
