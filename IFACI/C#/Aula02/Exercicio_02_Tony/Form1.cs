using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Exercicio_02_Tony
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            label1.Text = " ";
        }

        private void button3_Click(object sender, EventArgs e)
        {
            DialogResult bc;
            MessageBoxButtons bot = MessageBoxButtons.OKCancel;
            MessageBoxIcon icon = MessageBoxIcon.Error;
            MessageBoxDefaultButton bd = MessageBoxDefaultButton.Button1;
            bc = MessageBox.Show("Erro ao tentar executar!", "Informação", bot, icon, bd);
        }

        private void label1_Click(object sender, EventArgs e)
        {
           

        }

        private void liga_Click(object sender, EventArgs e)
        {
            label1.Text = "A sistema foi inicializado!";
        }

        private void desliga_Click(object sender, EventArgs e)
        {
            label1.Text = "A sistema foi desenergizado!";
        }

        private void sair_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
