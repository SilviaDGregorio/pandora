using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class Reader : MonoBehaviour {
	
	public TextAsset csv; 
	
	void Start () {
		CSVReader.DebugOutputGrid( CSVReader.SplitCsvGrid(csv.text) ); 
	}
}